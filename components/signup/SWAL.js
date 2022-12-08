import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function SWAL(type, message, icon, cb) {
  MySwal.fire({
    title: <strong>{type}</strong>,
    html: <i>{message}</i>,
    icon,
  }).then(() => {
    if (cb) cb();
  });
}
