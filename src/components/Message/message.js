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

export default function Message(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperStyle}>
      {/* <div className="message-container"> */}
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>How are u doing?</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>I'm doing good.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>Are you working or studying now?</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>I'm interning.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>My work is in IT field.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>I'm doing good.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>Are you working or studying now?</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>Are you working or studying now?</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>I'm interning.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>My work is in IT field.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>I'm doing good.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg"
        />{" "}
        &nbsp;
        <div className="message you">
          <span>Are you working or studying now?</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>
      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>I'm interning.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>

      <Toolbar className="toolbar-message-me">
        <Avatar
          alt="Taylor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
        />{" "}
        &nbsp;
        <div className="message me">
          <span>My work is in IT field.</span>
          <p className="chat-time mb-0"> 12:00 PM</p>
        </div>
        <IconButton aria-label="show 4 new mails" color="inherit" size="small">
          <MoreVertIcon className={classes.icons} />
        </IconButton>
      </Toolbar>
      {/* </div> */}
    </Paper>
  );
}
