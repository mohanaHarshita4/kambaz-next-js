import * as db from "../../../Database";

export default function People({ params }: { params: { cid: string } }) {
  const users = db.user as any[];

  return (
    <div className="p-4">
      <h3>People</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u._id}</td>
              <td>{u.section}</td>
              <td>{u.role}</td>
              <td>{u.lastActivity}</td>
              <td>{u.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
