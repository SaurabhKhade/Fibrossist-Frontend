import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styles from "../../styles/settings.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import getHost from "../../host";

export default function UpdateDetails({ oldName, oldSurname, oldBirthDate }) {
  const [name, setName] = useState(oldName);
  const [surname, setSurname] = useState(oldSurname);
  const [birthDate, setBirthDate] = useState(dayjs(Date.now()));
  const router = useRouter();

  useEffect(() => {
    setName(oldName);
    setSurname(oldSurname);
    let [day, month, year] = oldBirthDate.split("-");
    setBirthDate(dayjs(`${year}-${month}-${day}`));
  }, [oldName, oldSurname, oldBirthDate]);

  async function handleClick() {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];

    if (!token) return router.push("/login");

    try {
      await axios.post(
        `${getHost()}/settings/update_details`,
        {
          name,
          surname,
          birthDate: birthDate.format("DD-MM-YYYY"),
        },
        {
          headers: {
            token,
          },
        }
      );
      alert("Details updated");
      window.location.reload();
    } catch (err) {
      // console.log(err);
      alert("Something went wrong");
    }
  }

  return (
    <div className={styles.updateName}>
      <TextField
        label="First Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disableFuture
          label="Birth Date"
          openTo="year"
          views={["year", "month", "day"]}
          value={birthDate}
          onChange={(newValue) => {
            setBirthDate(newValue);
          }}
          minDate={dayjs("1920-01-01")}
          maxDate={dayjs(Date.now())}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" onClick={handleClick}>
        Update
      </Button>
    </div>
  );
}
