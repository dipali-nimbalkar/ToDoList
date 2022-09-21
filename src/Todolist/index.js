import React from "react";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState } from "react";

const Todolist = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editdata, setItemdata] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curtdata) => {
          if (curtdata.id === editdata) {
            return { ...curtdata, name: inputdata };
          }
          return curtdata;
        })
      );

      setInputData("");
      setItemdata(null);
      setToggleButton(false);
    } else {
      const newMyInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, newMyInputData]);
      setInputData("");
    }
  };
  const deleteItems = (index) => {
    const updatedItem = items.filter((CurntEle) => {
      return CurntEle.id !== index;
    });
    setItems(updatedItem);
  };

  const editItems = (index) => {
    const editedItem = items.find((curtdata) => {
      return curtdata.id === index;
    });
    setInputData(editedItem.name);
    setItemdata(index);
    setToggleButton(true);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <Grid
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        display="flex"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            width: 600,
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "80px",
            boxShadow: "0 1px 6px 1px blue",
          }}
        >
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <AssignmentIcon />
              </Avatar>
              <Typography>Add Your List Here</Typography>
            </Box>
            <Box>
              <TextField
                label="Additem"
                value={inputdata}
                onChange={(e) => setInputData(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {toggleButton ? (
                        <EditIcon onClick={addItems} />
                      ) : (
                        <AddIcon onClick={addItems} />
                      )}
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {console.log(items)}
            </Box>
            <Box
              Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {items.map((curtdata) => {
                return (
                  <TextField
                    label={curtdata.name}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EditIcon onClick={() => editItems(curtdata.id)} />
                          <DeleteIcon
                            onClick={() => deleteItems(curtdata.id)}
                          />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  ></TextField>
                );
              })}
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Button variant="contained" onClick={removeAll}>
                Remove All
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Todolist;
