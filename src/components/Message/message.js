import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImageIcon from "@material-ui/icons/Image";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import "./styles.css";
import { convertTimestampToHumanTime, getToken } from "../../common/shared";
import { MESSAGE_TYPES } from "../../constants";

export default function Message(props) {
  const { listMessage, isListMessage } = props;
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperStyle}>
      {!isListMessage &&
        listMessage &&
        listMessage?.map((mess) => (
          <div key={mess?._id}>
            <Toolbar
              className={
                mess?.senderId?._id === getToken("userId")
                  ? "toolbar-message-me"
                  : ""
              }
            >
              <Avatar
                alt="Remy Sharp"
                src={`http://localhost:2017/public/${mess?.senderId?.avatar}`}
              />{" "}
              &nbsp;
              <div
                className={
                  mess?.senderId?._id === getToken("userId")
                    ? "message me"
                    : "message you"
                }
              >
                {mess?.messageType === MESSAGE_TYPES[0] && (
                  <span>{mess?.text || ""}</span>
                )}
                {mess?.messageType === MESSAGE_TYPES[1] && (
                  <img
                    className={classes.images}
                    alt="img"
                    src={`http://localhost:2017/public/${mess?.image}`}
                  />
                )}
                {mess?.messageType === MESSAGE_TYPES[2] && (
                  <a
                    href={`http://localhost:2017/public/${mess?.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    File Name
                  </a>
                )}
              </div>
              <IconButton color="inherit" size="small">
                <MoreVertIcon className={classes.icons} />
              </IconButton>
            </Toolbar>
          </div>
        ))}
    </Paper>
  );
}
