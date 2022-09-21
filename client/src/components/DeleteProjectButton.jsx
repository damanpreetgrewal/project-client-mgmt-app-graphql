import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";

export default function DeleteProductButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECT }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
}
