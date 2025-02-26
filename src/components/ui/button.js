import { cn } from "../../utils/cn";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-semibold transition-all",
        "bg-green-500 hover:bg-green-600 text-white dark:bg-green-400 dark:hover:bg-green-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
