export function EngravedDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="mark" viewBox="0 0 100 110">
          <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 70 C49 60 51 50 50 40" strokeWidth="2.8" />
            <g transform="translate(50 40)">
              <path d="M0 0 C-10 -9 -11 -24 0 -33 C11 -24 10 -9 0 0 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
              <path d="M0 -3 L0 -29" strokeWidth="1.4" />
              <path d="M0 -10 L-5 -16 M0 -10 L5 -16 M0 -18 L-4 -23 M0 -18 L4 -23" strokeWidth="1" />
            </g>
            <g transform="translate(50 47) rotate(-49)">
              <path d="M0 0 C-9 -8 -10 -22 0 -30 C10 -22 9 -8 0 0 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
              <path d="M0 -3 L0 -26" strokeWidth="1.3" />
            </g>
            <g transform="translate(50 47) rotate(49)">
              <path d="M0 0 C-9 -8 -10 -22 0 -30 C10 -22 9 -8 0 0 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
              <path d="M0 -3 L0 -26" strokeWidth="1.3" />
            </g>
            <ellipse cx="50" cy="73" rx="11" ry="7.5" fill="color-mix(in oklab,currentColor 16%,transparent)" />
            <path d="M50 66 L50 80" strokeWidth="1.3" />
            <path d="M33 84 L67 84" strokeWidth="1.6" strokeDasharray="1.5 4" />
          </g>
        </symbol>

        <symbol id="star" viewBox="0 0 24 24">
          <path d="M12 2 L14.6 8.6 L21.5 9 L16.2 13.5 L18 20.3 L12 16.4 L6 20.3 L7.8 13.5 L2.5 9 L9.4 8.6 Z" fill="currentColor" />
        </symbol>

        <symbol id="af-corner" viewBox="0 0 86 86">
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M2 20 Q2 2 20 2" strokeWidth="2.4" />
            <path d="M10 24 Q10 10 24 10" strokeWidth=".9" />
            <path d="M22 22 C24 36 32 42 44 42 C52 42 56 35 53 29 C51 25 45 25 44 29 C43 33 47 35 49 33" fill="color-mix(in oklab,currentColor 7%,transparent)" />
            <path d="M22 22 C36 24 42 32 42 44 C42 52 35 56 29 53 C25 51 25 45 29 44 C33 43 35 47 33 49" fill="color-mix(in oklab,currentColor 7%,transparent)" />
            <path d="M22 22 C30 28 32 34 32 42 M22 22 C28 30 34 32 42 32" strokeWidth=".7" />
            <circle cx="22" cy="22" r="2.3" fill="currentColor" />
            <path d="M14 40 C18 38 23 40 25 47 C19 47 15 45 14 40 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
            <path d="M40 14 C38 18 40 23 47 25 C47 19 45 15 40 14 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
          </g>
        </symbol>

        <symbol id="fleuron" viewBox="0 0 64 26">
          <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <path d="M32 3 L36 13 L32 23 L28 13 Z" fill="color-mix(in oklab,currentColor 14%,transparent)" />
            <path d="M28 13 L6 13 M36 13 L58 13" />
            <path d="M6 13 C10 8 11 18 6 13 Z M58 13 C54 8 53 18 58 13 Z" fill="color-mix(in oklab,currentColor 10%,transparent)" />
            <circle cx="32" cy="13" r="1.8" fill="currentColor" />
            <circle cx="14" cy="13" r="1.3" fill="currentColor" />
            <circle cx="50" cy="13" r="1.3" fill="currentColor" />
          </g>
        </symbol>

        <symbol id="sprig" viewBox="0 0 34 200">
          <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M17 6 L17 194" />
            <path d="M17 36 C8 31 4 38 7 47 C15 47 18 42 17 36 Z" fill="color-mix(in oklab,currentColor 9%,transparent)" />
            <path d="M17 64 C26 59 30 66 27 75 C19 75 16 70 17 64 Z" fill="color-mix(in oklab,currentColor 9%,transparent)" />
            <path d="M17 96 C8 91 4 98 7 107 C15 107 18 102 17 96 Z" fill="color-mix(in oklab,currentColor 9%,transparent)" />
            <path d="M17 126 C26 121 30 128 27 137 C19 137 16 132 17 126 Z" fill="color-mix(in oklab,currentColor 9%,transparent)" />
            <path d="M17 156 C8 151 4 158 7 167 C15 167 18 162 17 156 Z" fill="color-mix(in oklab,currentColor 9%,transparent)" />
            <circle cx="17" cy="10" r="2" fill="currentColor" />
          </g>
        </symbol>

        <symbol id="divider-wide" viewBox="0 0 560 40">
          <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <path d="M10 20 L232 20 M328 20 L550 20" />
            <path d="M232 20 C244 13 250 27 258 20 M328 20 C316 13 310 27 302 20" strokeWidth="1.1" />
            <circle cx="280" cy="20" r="6.5" />
            <path d="M280 11 C275 5 285 5 280 11 M280 29 C275 35 285 35 280 29" />
            <circle cx="232" cy="20" r="2" fill="currentColor" />
            <circle cx="328" cy="20" r="2" fill="currentColor" />
            <path d="M30 20 C24 14 24 26 30 20 M530 20 C536 14 536 26 530 20" />
            <path d="M58 20 C52 16 52 24 58 20 M502 20 C508 16 508 24 502 20" />
          </g>
        </symbol>

        <symbol id="check" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12.5 L10.5 16 L17 8.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        <symbol id="i-cost" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 50 L22 34 L34 42 L54 16" />
            <path d="M44 16 L54 16 L54 26" />
          </g>
        </symbol>

        <symbol id="i-quality" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 8 C40 18 48 24 48 36 A16 16 0 0 1 16 36 C16 24 24 18 32 8 Z" />
            <path d="M32 30 L32 44 M26 36 L38 36" strokeWidth="1.3" />
          </g>
        </symbol>

        <symbol id="i-supply" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 40 L26 40 L26 24 L40 24 L40 16 L56 16" />
            <path d="M50 10 L56 16 L50 22" strokeWidth="1.5" />
            <path d="M14 46 L20 52 M30 46 L36 52 M44 30 L50 36" strokeWidth="1.2" />
          </g>
        </symbol>

        <symbol id="i-disconnect" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="22" r="6" />
            <circle cx="44" cy="22" r="6" />
            <path d="M14 50 C14 40 18 36 26 36 M50 50 C50 40 46 36 38 36" />
            <path d="M28 28 L36 28" strokeDasharray="2 3" />
          </g>
        </symbol>

        <symbol id="i-grow" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 42 C20 36 28 38 32 42 C36 38 44 36 50 42 C50 50 42 54 32 54 C22 54 14 50 14 42 Z" />
            <path d="M32 42 L32 22 M32 30 C27 25 23 27 23 32 M32 30 C37 25 41 27 41 32" strokeWidth="1.7" />
          </g>
        </symbol>

        <symbol id="i-systems" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="20" />
            <path d="M32 12 C40 22 40 42 32 52 C24 42 24 22 32 12 Z" />
            <path d="M12 32 L52 32" />
          </g>
        </symbol>

        <symbol id="i-network" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 22 L46 30 L30 46 L18 22 M46 30 L50 16 M30 46 L44 48" />
            <circle cx="18" cy="22" r="3.4" fill="currentColor" />
            <circle cx="46" cy="30" r="3.4" fill="currentColor" />
            <circle cx="30" cy="46" r="3.4" fill="currentColor" />
          </g>
        </symbol>

        <symbol id="i-seed" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="32" cy="34" rx="13" ry="18" transform="rotate(18 32 34)" />
            <path d="M27 24 C30 30 34 38 38 44" strokeWidth="1.2" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
