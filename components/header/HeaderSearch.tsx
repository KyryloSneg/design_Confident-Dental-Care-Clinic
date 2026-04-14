import InputGroup from "../ui/custom/input-group";

const HeaderSearch = () => {
  return (
    <InputGroup
      className="max-w-170 shadow-[0_0_0.9375rem_0_#3177e10d]"
      labelProps={{
        className:
          "**:text-b3-light **:tablet:text-b2-light **:2xs:max-tablet:text-[0.8125rem] **:2xs:max-tablet:tracking-[0.02em]",
      }}
      isResponsive={true}
    />
  );
};

export default HeaderSearch;
