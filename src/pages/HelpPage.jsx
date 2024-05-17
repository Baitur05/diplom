import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactWhatsapp from "react-whatsapp";

const HelpPage = () => {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("");
  return (
    <Box sx={{
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      display: 'flex'
    }}>
      <Box sx={{ paddingRight: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography sx={{ fontSize: '1.7rem', fontWeight: 600 }}>Присылайте нам сообщения для получения информации</Typography>
        <Typography sx={{ fontSize: 18 }}>Звоните нам в случае возникновения чрезвычайной ситуации по этому номеру</Typography>
        <Typography sx={{ color: "red", fontWeight: 600, fontSize: 18 }}>+996 (551)-57-05-71</Typography>
      </Box>
      <form method="post" action="mailto:alym01001@gmail.com">
        <Box component={"div"} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: 2
        }}>
          <input defaultValue={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Имя" style={{
            background: 'transparent',
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'lightblue',
            padding: 10,
            width: '100%'
          }} />
          <textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)} placeholder="Сообщение" rows={5} cols={40} style={{
            resize: 'none',
            background: 'transparent',
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'lightblue',
            padding: 10,
          }}></textarea>
          <ReactWhatsapp number="+996779079279" message={`Имя: ${name}
Сообщение: ${message}`}>
            <Button type="submit" variant="contained">Отправить</Button>
          </ReactWhatsapp>
        </Box>
      </form>
    </Box>
  );
};

export default HelpPage;
