import styles from "../../styles/settings.module.scss";
import ImageUpload from "../../components/settings/ImageUpload";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Settings() {
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
  return (
    <div className={styles.settings}>
      <ImageUpload
        src={
          data.profile.exists
            ? `http://localhost:5000/${data.profile.path}`
            : "/assets/misc/default-profile.jpeg"
        }
      />
    </div>
  );
}
