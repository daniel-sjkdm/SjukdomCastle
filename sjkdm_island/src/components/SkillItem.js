import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles({
    title: {
        fontFamily: "Sans Serif",
        textAlign: "center",
        color: "white"
    },
    item: {
        color: "white", 
        fontFamily: "Space Mono, mono space"
    },
    paper: {
        height: "380px",
        borderRadius: "3px",
        backgroundColor: "#121414",
        marginTop: "20px"
    }
});



const SkillItem = ({skills}) => {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.title}> { skills.title } </Typography>
                <List>
                    {
                        skills.content.map((skill, index) => (
                            <ListItem key={index}>
                                { 
                                    skill.img? (
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={skill.img} />
                                            </Avatar>
                                        </ListItemAvatar>
                                    ) : "" 
                                }
                                <ListItemText primary={<Typography className={classes.item}> {skill.skill} </Typography>} disableTypography={true} />
                                {
                                    skill.level? ( 
                                        [1, 2, 3, 4, 5].map(i => (
                                            i <= skill.level ? (
                                                <StarIcon style={{ color: "white" }} />
                                            ): <StarBorderIcon style={{ color: "white" }} />
                                        ))
                                    ) : ""
                                }
                            </ListItem>
                        ))
                    }
                </List>
            </Paper>
        </div>
    );
}


export default SkillItem;