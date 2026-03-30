import { db } from "@/db";
import { groupsTable } from "@/db/schema"


export default async function Groups() {
    const groups = await db.select().from(groupsTable);
  return (
    <div>
        <h2>Groups</h2>
        <div className="flex flex-wrap">
            {groups.map(gr =>
                <div key={gr.id} className="border p-2 m-2 bg-cyan-100">{gr.title}</div>
            )}
        </div>
    </div>
  )
}
