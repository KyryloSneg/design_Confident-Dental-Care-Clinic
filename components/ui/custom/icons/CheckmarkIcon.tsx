const CheckmarkIcon = () => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.20751 7.88296C4.08978 7.88296 3.97716 7.83304 3.89654 7.74501L1.82207 5.47689C1.66039 5.30084 1.66935 5.02362 1.84084 4.85808C2.01275 4.69254 2.28277 4.7013 2.4436 4.87735L4.20325 6.80036L7.78995 2.7704C7.9495 2.59128 8.2191 2.57945 8.39314 2.74237C8.56676 2.90528 8.5787 3.1825 8.42002 3.36075L4.52233 7.74019C4.44256 7.83041 4.32909 7.88209 4.2105 7.88296H4.20751Z"
        fill="white"
      />
      <mask
        id="mask0_54_2363"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="8"
        height="6"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.20751 7.88296C4.08978 7.88296 3.97716 7.83304 3.89654 7.74501L1.82207 5.47689C1.66039 5.30084 1.66935 5.02362 1.84084 4.85808C2.01275 4.69254 2.28277 4.7013 2.4436 4.87735L4.20325 6.80036L7.78995 2.7704C7.9495 2.59128 8.2191 2.57945 8.39314 2.74237C8.56676 2.90528 8.5787 3.1825 8.42002 3.36075L4.52233 7.74019C4.44256 7.83041 4.32909 7.88209 4.2105 7.88296H4.20751Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_54_2363)">
        {/* remove fill in order to not suddenly "break" the icon on small viewports */}
        <rect width="10.238" height="10.5107" fill="none" />
      </g>
    </svg>
  );
};

export default CheckmarkIcon;
