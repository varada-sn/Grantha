import React from "react";
import { useQuery } from "@tanstack/react-query";

export const Dashboard = () => {
    const fetchBooks = async () => {
        const response = await fetch("http://localhost:8085/api/books/supplier", {
            credentials: "include",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (!response.ok) throw new Error("Failed to fetch books");
        return response.json();
    };

    const { data: books = [], isLoading, error } = useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks,
    });

    if (isLoading) return <p className="text-center">Loading books...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Supplier Dashboard</h2>

            <h3 className="text-lg font-semibold mb-4 text-gray-700">Books List</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border border-gray-300 p-3">Title</th>
                            <th className="border border-gray-300 p-3">Author</th>
                            <th className="border border-gray-300 p-3">Genre</th>
                            <th className="border border-gray-300 p-3">Rental Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books.map((book) => (
                                <tr key={book.id} className="border border-gray-300 odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                                    <td className="border border-gray-300 p-3 text-gray-800">{book.title}</td>
                                    <td className="border border-gray-300 p-3 text-gray-800">{book.author}</td>
                                    <td className="border border-gray-300 p-3 text-gray-800">{book.genre}</td>
                                    <td className="border border-gray-300 p-3 text-gray-800">Rs.{book.rentalPrice}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500 p-4">No books available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};