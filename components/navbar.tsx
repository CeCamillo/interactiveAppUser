import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getEmployees from "@/actions/get-employees";

const Navbar = async () => {
    const employees = await getEmployees();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">Interactive APP</p>
                    </Link>
                    <MainNav data={employees}/>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;