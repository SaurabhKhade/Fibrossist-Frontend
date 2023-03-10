import styles from "../../styles/settings.module.scss";
import ImageUpload from "../../components/settings/ImageUpload";
import axios from "axios";
import { useEffect, useState } from "react";
import UpdateDetails from "../../components/settings/UpdateDetails";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
// import UpdateBirthday from "../../components/settings/UpdateBirthday";

export default function Settings() {
  const router = useRouter();
  const [data, setData] = useState({
    details: {
      name: "",
      surname: "",
      birthDate: "",
    },
    profile: { exists: false },
  });
  useEffect(() => {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    if (!token)
      return (() => {
        router.push("/login");
      })();

    async function ApiCall() {
      try {
        let response = await axios.get("http://localhost:5000/details", {
          headers: {
            token,
          },
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    }
    ApiCall();
  }, []);

  function logout() {
    document.cookie = "token" + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
    setTimeout(() => router.push("/login"), 0);
  }
  return (
    <div className={styles.settings}>
      <ImageUpload
        src={
          data.profile.exists
            ? `http://localhost:5000/${data.profile.path}`
            : "/assets/misc/default-profile.jpeg"
        }
      />
      <UpdateDetails
        oldName={data.details.name}
        oldSurname={data.details.surname}
        oldBirthDate={data.details.birthDate}
      />
      <div className={styles.updateBirthday}>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
