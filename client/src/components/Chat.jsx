import { React, useState, useEffect } from "react";
import { Footer } from "./Footer";
import ResponsiveAppBar from "./NavBar";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const Chat = () => {
  const [value1, setValue1] = useState(
    "Responses will be displayed here......"
  );
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const [userInput, setUserInput] = useState("");
  const [newObj, setNewObj] = useState({});
  const [p_test, setPTest] = useState(false);
  const [a_test, setATest] = useState(false);

  //request on loading
  useEffect(() => {
    const url = "https://sih-r2.onrender.com/dashboard";

    const fetchdataChatup = async () => {
      try {
        const response = await axios.get(url);

        console.log(response.data);

        const response_Array = response.data;
        const user_email = localStorage.getItem("email");

        const userIndex = response_Array.findIndex((user) => {
          return user.email === user_email;
        });

        if (userIndex != -1) {
          const obj = response_Array[userIndex];
          setNewObj(obj);
          console.log(obj);
          if (obj.hasOwnProperty("personality")) {
            setPTest(true);
          }
          if (obj.hasOwnProperty("technical")) {
            setATest(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchdataChatup();
  }, []);

  let personality = "ENFJ";
  let tech = 0;
  let num = 0;
  let cog = 0;
  if (p_test) personality = newObj.personality;
  if (a_test) {
    tech = newObj.technical;
    num = newObj.numerical;
    cog = newObj.cognitive;
  }

  const responseHandler = async (userInput) => {
    if (p_test && a_test) {
      const auth_token = "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";
      const url =
        "https://api-inference.huggingface.co/models/codellama/CodeLlama-34b-Instruct-hf";

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${auth_token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(userInput),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("API Response:", JSON.stringify(result));
          const final_response = result[0].generated_text;

          const regex = /HELPFUL ASSISTANT:\s*(.*)/;

          // Use the regex to capture the text after "HELPFUL ASSISTANT:"
          const match = final_response.match(regex);
          const extractedText = match[1].trim();
          return extractedText;

          // setValue(extractedText);
        } else {
          console.error(
            "API Request Failed with Status Code:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert(
        "You must give both personality and aptitude test before accessing ChatUp"
      );
    }
  };

  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            width: "70%",
            margin: "0 auto 0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              minHeight: "400px",
              border: "2px solid black",
              borderRadius: "10px",
              marginBottom: "50px",
              background: "#FFFFFF",
              marginTop: "50px",
            }}
          >
            <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
              {value1}
            </Typography>
            <br />

            <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
              {value3}
            </Typography>
            <br />
            <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
              {value2}
            </Typography>
          </div>
          <Box sx={{ display: "flex" }}>
            <TextField
              placeholder="Suggest me career paths"
              sx={{ minWidth: "93%" }}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={async () => {
                const output1 = await responseHandler({
                  inputs: `USER: I am an ${personality} personality type. ${userInput} \n HELPFUL ASSISTANT:`,
                });

                const output2 = await responseHandler({
                  inputs: `USER: I am an ${personality} personality type. ${userInput} \n HELPFUL ASSISTANT: Some of the career opions you might look into are: 1)`,
                });
                const output3 = await responseHandler({
                  inputs: `USER: I gave an aptitude test with max score 3 and received technical aptitude = ${tech}, numerical aptitude = ${num}, cognitive_aptitude = ${cog}. ${userInput}\n HELPFUL ASSISTANT: The field you should choose considering your aptitude results should comprise of: 1)`,
                });
                setValue1(output1);
                setValue2(output2);
                setValue3(output3);
                console.log(value3);
              }}
              sx={{
                ":hover": {
                  color: "white",

                  backgroundColor: "#de6c0e",
                },
                backgroundColor: "#de6c0e",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
