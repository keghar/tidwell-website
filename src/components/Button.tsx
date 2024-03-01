import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm w-36 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm w-36 focus:outline-none font-semibold",
};

const variantStyles = {
  solid: {
    slate:
      "bg-gray-600 text-white hover:bg-gray-800 hover:text-slate-100 active:bg-gray-800 active:text-slate-300 focus-visible:outline-gray-900",
    blue: "bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800 hover:text-gray-900 hover:bg-blue-500 active:bg-blue-400 active:text-blue-100 focus-visible:outline-blue-600",
    orange:
      "bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500 text-gray-900 hover:bg-blue-50 active:bg-blue-500 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-gray-600 text-gray-700 hover:text-slate-900 hover:ring-gray-500  hover:bg-gray-300 active:bg-gray-100 active:text-gray-600 focus-visible:outline-blue-200 focus-visible:ring-slate-300",
    white:
      "ring-gray-700 text-gray-900 hover:ring-gray-500 active:ring-gray-700 active:text-slate-600 focus-visible:outline-white bg-white hover:bg-gray-100",
  },
};

type ButtonProps = (
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
    | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= "solid";
  props.color ??= "slate";

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
      ? variantStyles.solid[props.color]
      : undefined,
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
