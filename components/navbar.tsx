"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getEmployees from "@/actions/get-employees";
import { Employee } from "@/types";

const Navbar: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            getEmployees()
                .then(data => setEmployees(data))
                .catch(error => {
                    setError(error); // Se ocorrer um erro, definimos o estado de error
                    console.error('Erro ao buscar funcionários:', error);
                });
        };

        fetchData();
    }, []);

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">Interactive APP</p>
                    </Link>
                    <MainNav data={employees} error={error} />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;