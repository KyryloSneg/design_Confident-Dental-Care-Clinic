import { cn } from "@/utils/shadcn";

const ulClassName = "flex items-center gap-10";

const liClassName =
  "flex items-center gap-3 text-text-primary text-b2-light capitalize w-max";

const imgClassName =
  "text-[0.625rem] font-jakarta h-[24px] leading-[0.9] text-text-secondary";

const HeaderAddress = ({
  extendedAddressClassName = "",
  extendedUlClassName = "",
  extendedLiClassName = "",
  extendedImgClassName = "",
}: {
  extendedAddressClassName?: string;
  extendedUlClassName?: string;
  extendedLiClassName?: string;
  extendedImgClassName?: string;
}) => {
  return (
    <address className={extendedAddressClassName}>
      <ul className={cn(ulClassName, extendedUlClassName)}>
        <li className={cn(liClassName, extendedLiClassName)}>
          <img
            src="/icons/location.svg"
            alt="Location"
            draggable="false"
            width={19}
            height={24}
            className={cn(imgClassName, extendedImgClassName)}
          />
          St. Sanguin Number 40
        </li>
        <li className={cn(liClassName, extendedLiClassName)}>
          <img
            src="/icons/phone.svg"
            alt="Phone"
            draggable="false"
            width={24}
            height={24}
            className={cn(imgClassName, extendedImgClassName)}
          />
          +1234 - 4567 - 890
        </li>
      </ul>
    </address>
  );
};

export default HeaderAddress;
