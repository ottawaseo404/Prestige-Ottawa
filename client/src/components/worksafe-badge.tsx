interface WorkSafeBadgeProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function WorkSafeBadge({ size = "md", showLabel = true, className = "" }: WorkSafeBadgeProps) {
  const sizeClasses = {
    sm: {
      container: "px-1.5 py-0.5 gap-0.5",
      text: "text-[10px]",
      innerPadding: "px-0.5"
    },
    md: {
      container: "px-2 py-1 gap-1",
      text: "text-xs",
      innerPadding: "px-0.5"
    },
    lg: {
      container: "px-3 py-2 gap-2",
      text: "text-sm",
      innerPadding: "px-1"
    }
  };

  const s = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`bg-[#0066CC] rounded ${s.container} flex items-center`}>
        <span className={`font-bold text-white ${s.text} tracking-tight`}>WSIB</span>
        <span className={`font-bold text-[#0066CC] bg-white ${s.innerPadding} ${s.text} tracking-tight`}>INSURED</span>
      </div>
      {showLabel && <span className="text-white/60 text-xs">Certified</span>}
    </div>
  );
}

export function WorkSafeBadgeInline({ size = "md", className = "" }: Omit<WorkSafeBadgeProps, "showLabel">) {
  const sizeClasses = {
    sm: {
      container: "px-1.5 py-0.5 gap-0.5",
      text: "text-[10px]",
      innerPadding: "px-0.5"
    },
    md: {
      container: "px-2 py-1 gap-1",
      text: "text-xs",
      innerPadding: "px-0.5"
    },
    lg: {
      container: "px-3 py-2 gap-2",
      text: "text-sm",
      innerPadding: "px-1"
    }
  };

  const s = sizeClasses[size];

  return (
    <div className={`bg-[#0066CC] rounded ${s.container} flex items-center ${className}`}>
      <span className={`font-bold text-white ${s.text} tracking-tight`}>WSIB</span>
      <span className={`font-bold text-[#0066CC] bg-white ${s.innerPadding} ${s.text} tracking-tight`}>INSURED</span>
    </div>
  );
}
