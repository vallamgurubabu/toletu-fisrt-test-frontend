// pages/AdminDashboard.tsx

import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

const dummyUsers = [
  { id: "u1", name: "Alice", phone: "1234567890", banned: false },
  { id: "u2", name: "Bob", phone: "2345678901", banned: true },
  { id: "u3", name: "Charlie", phone: "3456789012", banned: false },
]

const dummyListings = [
  { id: "l1", title: "2BHK Apartment", user: "Alice", approved: true },
  { id: "l2", title: "1BHK Flat", user: "Bob", approved: false },
  { id: "l3", title: "Studio Room", user: "Charlie", approved: true },
]

const dummyRoommates = [
  { id: "r1", name: "Dave", phone: "4567890123", banned: false },
  { id: "r2", name: "Eva", phone: "5678901234", banned: true },
]

const dummyReports = [
  { id: "rep1", type: "User", reportedId: "u2", reason: "Spam behavior", resolved: false },
  { id: "rep2", type: "Listing", reportedId: "l2", reason: "Fake listing", resolved: true },
]

function SummaryCard({ title, count }: { title: string; count: number }) {
  return (
    <Card className="p-4 shadow-md flex flex-col items-center justify-center bg-[#38b6ff] text-white rounded-lg">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-4xl font-bold mt-2">{count}</p>
    </Card>
  )
}

export default function AdminDashboard() {
  const [users, setUsers] = useState(dummyUsers)
  const [listings, setListings] = useState(dummyListings)
  const [roommates, setRoommates] = useState(dummyRoommates)
  const [reports, setReports] = useState(dummyReports)

  // Toggle ban/unban user
  const toggleUserBan = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, banned: !u.banned } : u))
    )
  }

  // Delete user
  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  // Toggle listing approval
  const toggleListingApproval = (id: string) => {
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, approved: !l.approved } : l))
    )
  }

  // Delete listing
  const deleteListing = (id: string) => {
    setListings((prev) => prev.filter((l) => l.id !== id))
  }

  // Toggle ban/unban roommate profile
  const toggleRoommateBan = (id: string) => {
    setRoommates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, banned: !r.banned } : r))
    )
  }

  // Delete roommate
  const deleteRoommate = (id: string) => {
    setRoommates((prev) => prev.filter((r) => r.id !== id))
  }

  // Toggle report resolved/unresolved
  const toggleReportResolved = (id: string) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, resolved: !r.resolved } : r))
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-6 flex flex-col space-y-6 sticky top-0 h-screen">
        <h1 className="text-2xl font-bold text-[#38b6ff] mb-6">Toletu Admin</h1>
        <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
          <a href="#users" className="hover:text-[#38b6ff]">Users</a>
          <a href="#listings" className="hover:text-[#38b6ff]">Listings</a>
          <a href="#roommates" className="hover:text-[#38b6ff]">Roommates</a>
          <a href="#reports" className="hover:text-[#38b6ff]">Reports</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-10">
        {/* Summary cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <SummaryCard title="Total Users" count={users.length} />
          <SummaryCard title="Total Listings" count={listings.length} />
          <SummaryCard title="Total Roommates" count={roommates.length} />
          <SummaryCard title="Open Reports" count={reports.filter(r => !r.resolved).length} />
        </section>

        {/* Users Table */}
        <section id="users">
          <h2 className="text-xl font-semibold mb-4 text-[#38b6ff]">Users</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Banned</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(({ id, name, phone, banned }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>
                    <Switch
                      checked={!banned}
                      onCheckedChange={() => toggleUserBan(id)}
                      className="bg-red-500"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => deleteUser(id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Listings Table */}
        <section id="listings">
          <h2 className="text-xl font-semibold mb-4 text-[#38b6ff]">Listings</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Approved</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listings.map(({ id, title, user, approved }) => (
                <TableRow key={id}>
                  <TableCell>{title}</TableCell>
                  <TableCell>{user}</TableCell>
                  <TableCell>
                    <Switch
                      checked={approved}
                      onCheckedChange={() => toggleListingApproval(id)}
                      className="bg-green-500"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => deleteListing(id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Roommates Table */}
        <section id="roommates">
          <h2 className="text-xl font-semibold mb-4 text-[#38b6ff]">Roommates</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Banned</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roommates.map(({ id, name, phone, banned }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>
                    <Switch
                      checked={!banned}
                      onCheckedChange={() => toggleRoommateBan(id)}
                      className="bg-red-500"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => deleteRoommate(id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Reports Table */}
        <section id="reports">
          <h2 className="text-xl font-semibold mb-4 text-[#38b6ff]">Reports</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Reported ID</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Resolved</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map(({ id, type, reportedId, reason, resolved }) => (
                <TableRow key={id}>
                  <TableCell>{type}</TableCell>
                  <TableCell>{reportedId}</TableCell>
                  <TableCell>{reason}</TableCell>
                  <TableCell>
                    <Switch
                      checked={resolved}
                      onCheckedChange={() => toggleReportResolved(id)}
                      className="bg-yellow-500"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => alert(`Respond to report ${id}`)}>
                      Respond
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  )
}
