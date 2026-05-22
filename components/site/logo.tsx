import { cn } from "@/lib/utils";

interface LogoProps {
  mini?: boolean;
  className?: string;
  iconColor?: string;
  wordmark?: string;
}

const DEFAULT_ICON_COLOR = "#7c3aed";

export function Logo({
  mini = false,
  className = "",
  iconColor,
  wordmark = "PostPeer",
}: LogoProps) {
  const fill = iconColor || DEFAULT_ICON_COLOR;

  if (mini) {
    return (
      <svg
        className={cn(className)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        aria-hidden="true"
      >
        <g clipPath="url(#clip0_postpeer_mini)">
          <path d="M16.9623 13.5486L14.8838 12.3486L8.92907 22.6625L11.0075 23.8625L16.9623 13.5486Z" fill={fill} />
          <path d="M16.8052 13.7733L15.6052 11.6948L4.97618 17.8315L6.17618 19.91L16.8052 13.7733Z" fill={fill} />
          <path d="M20.9294 23.8631L23.0078 22.6631L16.7337 11.796L14.6552 12.996L20.9294 23.8631Z" fill={fill} />
          <path d="M14.3564 12.4778L16.4348 11.2778L11.0079 1.87813L8.92943 3.07813L14.3564 12.4778Z" fill={fill} />
          <path d="M6.17656 5.8317L4.97656 7.91016L15.0658 13.7352L16.2658 11.6567L6.17656 5.8317Z" fill={fill} />
          <path d="M14.7687 31.5117H17.1687L17.1687 0.871716H14.7687L14.7687 31.5117Z" fill={fill} />
          <path d="M3.96875 11.6708V14.0708H14.9288V11.6708H3.96875Z" fill={fill} />
          <path d="M15.4893 11.2082L14.2893 13.2866L25.7154 19.8835L26.9154 17.805L15.4893 11.2082Z" fill={fill} />
          <path d="M14.5286 11.6708V14.0708H27.9686V11.6708H14.5286Z" fill={fill} />
          <path d="M27.5585 9.75932C27.0119 7.72235 25.9381 5.86547 24.4453 4.3757C22.9525 2.88594 21.0933 1.81592 19.0553 1.27344L18.438 3.59269C20.0684 4.02667 21.5557 4.88269 22.7499 6.07449C23.9441 7.26631 24.8033 8.7518 25.2405 10.3813L27.5585 9.75932Z" fill={fill} />
          <path d="M30.4 6.60298C29.6227 4.3514 28.1929 2.38208 26.2927 0.945801L24.8455 2.86042C26.3657 4.00945 27.5095 5.5849 28.1314 7.38617L30.4 6.60298Z" fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0_postpeer_mini">
            <rect width="32" height="32.16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 32 33"
        fill="none"
        aria-hidden="true"
      >
        <g clipPath="url(#clip0_postpeer_full)">
          <path d="M16.9623 13.5486L14.8838 12.3486L8.92907 22.6625L11.0075 23.8625L16.9623 13.5486Z" fill={fill} />
          <path d="M16.8052 13.7733L15.6052 11.6948L4.97618 17.8315L6.17618 19.91L16.8052 13.7733Z" fill={fill} />
          <path d="M20.9294 23.8631L23.0078 22.6631L16.7337 11.796L14.6552 12.996L20.9294 23.8631Z" fill={fill} />
          <path d="M14.3564 12.4778L16.4348 11.2778L11.0079 1.87813L8.92943 3.07813L14.3564 12.4778Z" fill={fill} />
          <path d="M6.17656 5.8317L4.97656 7.91016L15.0658 13.7352L16.2658 11.6567L6.17656 5.8317Z" fill={fill} />
          <path d="M14.7687 31.5117H17.1687L17.1687 0.871716H14.7687L14.7687 31.5117Z" fill={fill} />
          <path d="M3.96875 11.6708V14.0708H14.9288V11.6708H3.96875Z" fill={fill} />
          <path d="M15.4893 11.2082L14.2893 13.2866L25.7154 19.8835L26.9154 17.805L15.4893 11.2082Z" fill={fill} />
          <path d="M14.5286 11.6708V14.0708H27.9686V11.6708H14.5286Z" fill={fill} />
          <path d="M27.5585 9.75932C27.0119 7.72235 25.9381 5.86547 24.4453 4.3757C22.9525 2.88594 21.0933 1.81592 19.0553 1.27344L18.438 3.59269C20.0684 4.02667 21.5557 4.88269 22.7499 6.07449C23.9441 7.26631 24.8033 8.7518 25.2405 10.3813L27.5585 9.75932Z" fill={fill} />
          <path d="M30.4 6.60298C29.6227 4.3514 28.1929 2.38208 26.2927 0.945801L24.8455 2.86042C26.3657 4.00945 27.5095 5.5849 28.1314 7.38617L30.4 6.60298Z" fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0_postpeer_full">
            <rect width="32" height="32.16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        {wordmark}
        <span className="opacity-60">/ui</span>
      </span>
    </span>
  );
}
