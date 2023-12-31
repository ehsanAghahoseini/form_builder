interface ICSvgProps {
    className: string,
    onClick?: () => void
}



export const CSvgHeye: React.FunctionComponent<ICSvgProps> = ({ className }) => {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M2392 4259 c-765 -55 -1506 -528 -1825 -1164 -184 -369 -183 -729 4
                -1099 279 -552 888 -990 1558 -1120 501 -98 1007 -25 1472 210 651 330 1089
                919 1089 1464 0 669 -660 1383 -1501 1625 -158 46 -311 73 -484 85 -153 11
                -150 11 -313 -1z m323 -319 c317 -29 618 -128 885 -290 375 -228 660 -575 746
                -908 23 -85 25 -112 21 -222 -3 -107 -9 -138 -36 -219 -145 -429 -553 -818
                -1066 -1016 -231 -90 -448 -129 -705 -129 -231 0 -395 25 -610 95 -667 217
                -1200 794 -1200 1299 0 284 168 597 468 873 401 368 972 565 1497 517z"/>
                <path d="M2385 3363 c-297 -63 -541 -293 -627 -590 -19 -65 -23 -102 -23 -228
                0 -129 3 -160 23 -225 39 -123 108 -244 190 -331 116 -124 221 -190 382 -241
                65 -20 95 -23 230 -23 173 0 238 14 374 81 200 99 357 287 428 514 20 65 23
                95 23 230 0 135 -3 165 -24 230 -95 302 -334 523 -633 584 -95 20 -250 19
                -343 -1z m326 -323 c115 -35 211 -109 280 -214 55 -83 79 -168 79 -275 0 -150
                -44 -257 -149 -362 -103 -103 -217 -151 -361 -151 -144 0 -258 48 -361 151
                -105 105 -149 212 -149 362 0 227 141 420 358 490 80 25 220 25 303 -1z"/>
            </g>
        </svg>

    );
};



export const CSvgTrash: React.FunctionComponent<ICSvgProps> = ({ className }) => {
    return (
        <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 458.5 458.5" >
            <g id="trashh">
                <g>
                    <g>
                        <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421
				c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508
				c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z
				 M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501
				c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778
				c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657
				c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z"/>
                        <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C214.249,385.607,220.965,392.323,229.249,392.323z"/>
                        <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705
				C291.671,385.607,298.387,392.323,306.671,392.323z"/>
                        <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C136.828,385.607,143.544,392.323,151.828,392.323z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const CSvgEdit: React.FunctionComponent<ICSvgProps> = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

            <title />

            <g id="Complete">

                <g id="edit">

                    <g>

                        <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                        <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                    </g>

                </g>

            </g>

        </svg>
    );
};