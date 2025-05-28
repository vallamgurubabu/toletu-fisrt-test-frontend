import ProfileSheet from "../components/ui/ProfileSheet"

export function ProfilePage() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <h1 className="text-xl font-bold">Toletu</h1>
      <ProfileSheet />
    </div>
  )
}
