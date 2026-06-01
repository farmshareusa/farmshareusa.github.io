import type { Metadata } from 'next';
import { CoopDirectory } from '@/components/CoopDirectory';
import { CoopMap } from '@/components/CoopMap';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'The Living Map — Find a Co-op Near You',
  description:
    'Search the FarmShare USA co-op network by ZIP, state, or role. Find growers, providers, and neighbors near you — or list your own.',
};

export default function CoopsPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero cool">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S22.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid" style={{ gridTemplateColumns: '1fr 1.2fr' }}>
            <div className="reveal">
              <span className="eyebrow">Act III · The Network</span>
              <h1>
                A living map of <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--gold-bright)',
                    fontWeight: 420,
                  }}
                >local food</em>.
              </h1>
              <p className="lede">
                Search by ZIP or state. Filter by consumer, provider, or hybrid. Watch your
                neighborhood light up — then connect, trade, and build together.
              </p>
              <div className="cta-row">
                <a href="#directory" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Search the Directory
                </a>
                <a href="#apply" className="btn btn-secondary">List Your Co-op</a>
              </div>
            </div>
            <div className="reveal d1">
              <CoopMap />
            </div>
          </div>
        </div>
      </section>

      {/* ============== EXPLAINER ============== */}
      <section className="band" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Three ways to plug in</span>
            <h2 className="sec-title">Three roles. One network.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S28.png" alt="Neighbors sharing produce over a backyard fence" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Role 01</div>
                <h3>Provider</h3>
                <p>
                  You grow more than you can use and want to share, swap, or sell into a local
                  network. We help you find members within driving distance.
                </p>
                <a href="#apply">Apply as Provider <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S25.png" alt="Patio container garden on a suburban deck" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Role 02</div>
                <h3>Consumer</h3>
                <p>
                  You want better food from real people you can name. Join a buying co-op,
                  participate in CSAs, and access vetted vendors at member rates.
                </p>
                <a href="#directory">Find one near you <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S14.png" alt="Group garden workshop" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Role 03</div>
                <h3>Hybrid</h3>
                <p>
                  Most established co-ops are both. You grow some, you source some, and your
                  network strengthens with every season.
                </p>
                <a href="/membership/">Get the Co-op Toolkit <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== DIRECTORY ============== */}
      <section className="band" id="directory" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The Directory</span>
            <h2 className="sec-title">The network, right now.</h2>
            <p className="lede">
              Seed data from our founding cohort. As members join, the map fills in. If your area
              is empty, you&apos;re probably the right person to start it.
            </p>
          </div>
          <CoopDirectory />
        </div>
      </section>

      {/* ============== APPLY ============== */}
      <section className="band green on-dark" id="apply">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Start one</span>
            <h2 className="sec-title">Put your town on the map.</h2>
            <p className="lede">
              Tell us a little about your area and we&apos;ll send the Co-op Founder Toolkit —
              templates, legal starter packs, and the playbook for finding your first 10 members.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520 }}>
            <LeadCapture
              buttonLabel="Send Me the Toolkit"
              placeholder="you@email.com — ZIP optional in the email"
              finePrint="We'll follow up within 48 hours."
            />
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>Not seeing one nearby?</h3>
            <p>The free 30-Day Plan + the founder toolkit are how every co-op on this map started.</p>
          </div>
          <a href="/start/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
            Start Free
          </a>
        </div>
      </section>
    </main>
  );
}
