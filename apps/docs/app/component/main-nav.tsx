import Link from "next/link";
import { cn } from "@ui/lib/utils"


export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary" >Dashboard</Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >Deals</Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >Analytics</Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >Setting</Link>

        </nav>
    )
}