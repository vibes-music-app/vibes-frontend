import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 py-2 shadow-md">
            <div>
                <SearchBar />
            </div>
            <Link href="/" className="absolute left-[50%] -translate-x-[50%]">
                <svg
                    width="130"
                    height="40"
                    viewBox="0 0 160 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M144.556 56.9238C146.074 57.7553 147.864 58.1711 149.925 58.1711C151.769 58.1711 153.396 57.7915 154.806 57.0322C156.216 56.2368 157.301 55.2244 158.06 53.9951C158.855 52.7658 159.253 51.4823 159.253 50.1445C159.253 48.7706 158.982 47.6498 158.439 46.782C157.933 45.8781 157.084 45.1008 155.891 44.45C154.734 43.7992 153.07 43.1122 150.901 42.3891C148.623 41.6298 147.014 40.9248 146.074 40.274C145.17 39.6232 144.718 38.7374 144.718 37.6165C144.718 36.4595 145.243 35.5737 146.291 34.9591C147.376 34.3083 148.894 33.9829 150.847 33.9829C152.618 33.9829 153.938 34.2721 154.806 34.8506C155.674 35.3929 156.107 36.1522 156.107 37.1284C156.107 37.3092 156.071 37.5081 155.999 37.725C155.963 37.9419 155.945 38.1408 155.945 38.3216C155.945 38.7193 156.107 39.0808 156.433 39.4062C156.758 39.6955 157.156 39.8401 157.626 39.8401C158.168 39.8401 158.584 39.6232 158.873 39.1893C159.163 38.7193 159.307 38.0504 159.307 37.1827C159.307 35.2664 158.566 33.7659 157.084 32.6812C155.637 31.5604 153.558 31 150.847 31C147.846 31 145.532 31.6146 143.905 32.8439C142.314 34.0371 141.519 35.6099 141.519 37.5623C141.519 39.5147 142.169 41.0875 143.471 42.2806C144.773 43.4738 146.888 44.5223 149.816 45.4262C151.516 45.9324 152.799 46.4205 153.667 46.8905C154.571 47.3605 155.185 47.8667 155.511 48.4091C155.872 48.9152 156.053 49.548 156.053 50.3072C156.053 51.6088 155.493 52.7297 154.372 53.6697C153.251 54.6098 151.823 55.0798 150.087 55.0798C148.352 55.0798 146.888 54.6821 145.695 53.8867C144.501 53.0912 143.652 51.9704 143.146 50.5242C142.929 49.7649 142.422 49.3853 141.627 49.3853C141.157 49.3853 140.759 49.548 140.434 49.8734C140.145 50.1626 140 50.5422 140 51.0123C140 51.8077 140.38 52.7839 141.139 53.9409C141.934 55.0617 143.073 56.056 144.556 56.9238Z"
                        fill="black"
                    />
                    <path
                        d="M2 29.4602L2.3013 28.5568L2.6026 27.653L2.9039 26.7498L3.2052 25.8484L3.50649 24.9497L3.80779 24.055L4.10909 23.1652L4.41039 22.2814L4.71169 21.4046L5.01299 20.5359L5.31429 19.6764L5.61559 18.8271L5.91689 17.9888L6.21819 17.1628L6.51948 16.3498L6.82078 15.551L7.12208 14.7672L7.42338 13.9995L7.72468 13.2486L8.02598 12.5155L8.32728 11.8011L8.62858 11.1062L8.92988 10.4316L9.23118 9.77815L9.53247 9.14663L9.83377 8.5378L10.1351 7.95234L10.4364 7.39096L10.7377 6.85438L11.039 6.34313L11.3403 5.85792L11.6416 5.39929L11.9429 4.9678L12.2442 4.5639L12.5455 4.18815L12.8468 3.84097L13.1481 3.52277L13.4494 3.23388L13.7507 2.97473L14.052 2.74558L14.3533 2.5467L14.6546 2.37834L14.9559 2.2407L15.2572 2.13393L15.5585 2.05817L15.8598 2.01352L16.1611 2L16.4624 2.01766L16.7636 2.06646L17.0649 2.14635L17.3662 2.25722L17.6675 2.39896L17.9688 2.57139L18.2701 2.77431L18.5714 3.00746L18.8727 3.27058L19.174 3.56338L19.4753 3.88547L19.7766 4.23648L20.0779 4.616L20.3792 5.02357L20.6805 5.45873L20.9818 5.92092L21.2831 6.40963L21.5844 6.92425L21.8857 7.46418L22.187 8.02881L22.4883 8.6174L22.7896 9.22931L23.0909 9.86378L23.3922 10.5201L23.6935 11.1974L23.9948 11.895L24.2961 12.6119L24.5974 13.3474L24.8987 14.1006L25.2 14.8706L25.5013 15.6564L25.8026 16.4571L26.1039 17.2719L26.4052 18.0996L26.7065 18.9394L27.0078 19.7901L27.3091 20.651L27.6104 21.5207L27.9117 22.3985L28.213 23.2831L28.5143 24.1737L28.8156 25.069L29.1169 25.9681L29.4182 26.8698L29.7195 27.7731L30.0208 28.677L30.3221 29.5803L30.6234 30.4818L30.9247 31.3809L31.226 32.276L31.5273 33.1664L31.8286 34.051L32.1299 34.9287L32.4312 35.7982L32.7325 36.6587L33.0338 37.5093L33.3351 38.3487L33.6364 39.1761L33.9377 39.9905L34.239 40.7907L34.5403 41.5762L34.8416 42.3457L35.1429 43.0984L35.4442 43.8336L35.7455 44.5497L36.0468 45.247L36.3481 45.9237L36.6494 46.5793L36.9507 47.2132L37.252 47.8246L37.5533 48.4124L37.8546 48.9764L38.1559 49.5158L38.4572 50.0298L38.7585 50.5176L39.0598 50.9792L39.3611 51.4136L39.6624 51.8204L39.9637 52.1991L40.265 52.5495L40.5663 52.8707L40.8676 53.1627L41.1689 53.4251L41.4702 53.6574L41.7715 53.8596L42.0728 54.031L42.3741 54.172L42.6754 54.282L42.9767 54.3612L43.278 54.4092L43.5793 54.426L43.8806 54.4116L44.1819 54.3661L44.4832 54.2895L44.7845 54.182L45.0858 54.0434L45.3871 53.8744L45.6884 53.6746L45.9897 53.4447L46.2909 53.1847L46.5922 52.8951L46.8935 52.5761L47.1948 52.2281L47.4961 51.8514L47.7974 51.4468L48.0987 51.0147L48.4 50.5552L48.7013 50.0695L49.0026 49.5576L49.3039 49.0201L49.6052 48.4582L49.9065 47.8722L50.2078 47.2626L50.5091 46.6305L50.8104 45.9764L51.1117 45.3015L51.413 44.6061L51.7143 43.8911L52.0156 43.1574L52.3169 42.406L52.6182 41.638L52.9195 40.8537L53.2208 40.0544L53.5221 39.2412L53.8234 38.4147L54.1247 37.5762L54.426 36.7265L54.7273 35.8669L55.0286 34.998L55.3299 34.1209L55.6312 33.2369L55.9325 32.3471L56.2338 31.4523L56.5351 30.5535L56.8364 29.652L57.1377 28.7488L57.439 27.8449L57.7403 26.9415L58.0416 26.0396L58.3429 25.1403L58.6442 24.2446L58.9455 23.3537L59.2468 22.4685L59.5481 21.5902L59.8494 20.7197L60.1507 19.8581L60.452 19.0066L60.7533 18.1659L61.0546 17.3371L61.3559 16.5213L61.6572 15.7194L61.9585 14.9324L62.2598 14.1612L62.5611 13.4066L62.8624 12.6697L63.1637 11.9512L63.465 11.2521L63.7663 10.5731L64.0676 9.91513L64.3689 9.27887L64.6702 8.66516L64.9715 8.07467L65.2728 7.50814L65.5741 6.96622L65.8754 6.44955L66.1767 5.95877L66.478 5.49444L66.7793 5.05713L67.0806 4.64736L67.3819 4.26559L67.6832 3.91228L67.9845 3.58788L68.2858 3.29275L68.5871 3.02726L68.8884 2.79172L69.1897 2.58639L69.491 2.41154L69.7923 2.26735L70.0936 2.15401L70.3949 2.07166L70.6962 2.02039L70.9975 2.00027L71.2988 2.0113L71.6001 2.0535L71.9014 2.12678L72.2027 2.23109L72.504 2.36629L72.8053 2.53221L73.1066 2.72867L73.4079 2.95543L73.7092 3.21222L74.0105 3.49872L74.3118 3.81463L74.6131 4.15953L74.9144 4.53302L75.2157 4.93468L75.517 5.36403L75.8182 5.82053L76.1195 6.30366L76.4208 6.81283L76.7221 7.34745L77.0234 7.90685L77.3247 8.49043L77.626 9.09746L77.9273 9.72717L78.2286 10.3789L78.5299 11.0518L78.8312 11.7452L79.1325 12.4581L79.4338 13.1897L79.7351 13.9392L80.0364 14.7057L80.3377 15.4882L80.639 16.2859L80.9403 17.0977L81.2416 17.9227L81.5429 18.7601L81.8442 19.6086L82.1455 20.4673L82.4468 21.3353L82.7481 22.2115L83.0494 23.0947L83.3507 23.9841L83.652 24.8785L83.9533 25.7769L84.2546 26.6781L84.5559 27.5812L84.8572 28.485L85.1585 29.3885L85.4598 30.2907L85.7611 31.1901L86.0624 32.0865L86.3637 32.9778L86.665 33.8636L86.9663 34.7428L87.2676 35.6141L87.5689 36.4767L87.8702 37.3294L88.1715 38.1712L88.4728 39.0013L88.7741 39.8185L89.0754 40.622L89.3767 41.4105L89.678 42.1836L89.9793 42.9399L90.2806 43.679L90.5819 44.3994L90.8832 45.1005L91.1845 45.7818L91.4858 46.4419L91.7871 47.0807L92.0884 47.6965L92.3897 48.2898L92.691 48.8586L92.9923 49.4034L93.2936 49.9228L93.5949 50.4163L93.8962 50.8834L94.1975 51.3236L94.4988 51.7363L94.8001 52.1211L95.1014 52.4775L95.4027 52.805L95.704 53.1033L96.0053 53.3718L96.3066 53.6107L96.6079 53.8192L96.9092 53.9973L97.2105 54.1446L97.5118 54.2612L97.8131 54.3471L98.1144 54.4016L98.4157 54.4248L98.717 54.4173L99.0183 54.3784L99.3196 54.3082L99.6209 54.2073L99.9222 54.0753L100.223 53.9126L100.525 53.7195L100.826 53.4959L101.127 53.2422L101.429 52.959L101.73 52.6463L102.031 52.3043L102.333 51.934L102.634 51.5351L102.935 51.1087L103.236 50.655L103.538 50.1747L103.839 49.6685L104.14 49.1364L104.442 48.5796L104.743 47.9984L105.044 47.394L105.346 46.7667L105.647 46.1171L105.948 45.4464"
                        stroke="black"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M70.9976 54.426V33.3351"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M104.5 48.5C104.5 48.5 117.5 23.5 99.9999 35C95.4126 36.3106 95.4602 33.0214 93 32C87.5424 29.7341 88.4999 39 88.4999 39"
                        stroke="black"
                        stroke-width="3"
                    />
                    <path
                        d="M128.274 57.4631C125.635 57.4631 123.285 56.8846 121.224 55.7276C119.163 54.5345 117.572 52.9436 116.452 50.9551C115.331 48.9665 114.77 46.7971 114.77 44.447C114.77 41.9884 115.276 39.6925 116.289 37.5593C117.337 35.39 118.784 33.6545 120.628 32.3529C122.471 31.0513 124.587 30.4005 126.973 30.4005C129.142 30.4005 130.986 30.8162 132.505 31.6478C134.059 32.4794 135.216 33.4737 135.976 34.6307C136.771 35.7877 137.169 36.8181 137.169 37.722C137.169 38.3728 136.735 38.9513 135.867 39.4575L119.055 49.0569C119.959 50.7924 121.188 52.1121 122.743 53.016C124.297 53.8837 126.123 54.3176 128.22 54.3176C129.377 54.3176 130.588 54.0283 131.854 53.4498C133.156 52.8713 134.186 52.1844 134.945 51.3889C135.198 51.0274 135.56 50.8466 136.03 50.8466C136.5 50.8466 136.88 51.0093 137.169 51.3347C137.494 51.624 137.657 52.0036 137.657 52.4736C137.657 52.8352 137.512 53.1967 137.223 53.5583C136.247 54.6791 134.909 55.6192 133.21 56.3784C131.547 57.1016 129.902 57.4631 128.274 57.4631ZM133.806 37.2881C133.3 36.0588 132.505 35.1369 131.42 34.5222C130.335 33.9076 128.871 33.6002 127.027 33.6002C125.292 33.6002 123.737 34.0883 122.363 35.0646C120.989 36.0046 119.904 37.2881 119.109 38.9152C118.35 40.5422 117.952 42.3319 117.916 44.2843C117.916 45.0074 117.952 45.5859 118.024 46.0198L133.806 37.2881Z"
                        fill="black"
                    />
                    <path
                        d="M118.242 36.9507C118.242 36.9507 115.473 43.8132 118.242 45C121.557 46.4203 126.528 42.9767 126.528 42.9767"
                        stroke="black"
                        stroke-width="2"
                    />
                    <path
                        d="M128.5 41.5C128.5 41.5 134.357 39.4916 134 36.5C133.573 32.9196 128 31.5 128 31.5"
                        stroke="black"
                        stroke-width="2"
                    />
                </svg>
            </Link>
            <Link href="/profile" className="flex items-center justify-center">
                <Image
                    src="/profile_photo.png"
                    width={50}
                    height={50}
                    alt="profile photo"
                />
            </Link>
        </nav>
    );
}