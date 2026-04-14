import Media from "../ui/custom/media";

const FooterMedia = () => {
  return (
    <ul className="flex items-center gap-4.25">
      <li>
        <Media type="instagram" href="#" />
      </li>
      <li>
        <Media type="facebook" href="#" />
      </li>
      <li>
        <Media type="linkedIn" href="#" />
      </li>
      <li>
        <Media type="x" href="#" />
      </li>
    </ul>
  );
};

export default FooterMedia;
