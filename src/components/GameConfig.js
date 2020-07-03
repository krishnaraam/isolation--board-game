import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleSelects from './SimpleSelects';
import { List, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: '"Times New Roman", Times, serif'
  },
  button: {
    margin: theme.spacing(1),
  }
  
}));

export default function GameConfig() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}> Game Configuration</Typography>
        </AccordionSummary>
        <AccordionDetails style={{position: 'relative'}}>
          <BoardSizeConfigDetails classes={classes}></BoardSizeConfigDetails>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function BoardSizeConfigDetails(classes) {
  const boardSizes = ['Five By Five', 'Six By Six', 'Seven By Seven']
  const difficultyLevels = ['Easy', 'Medium', 'Hard']
  return(
    <div>
        <List>
          <SimpleSelects title="Board Size" options={boardSizes} helperText="Select the board size"/>
          <SimpleSelects title="Difficulty Level" options={difficultyLevels} helperText="Decides the strength of the opponent"/>

          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            fullWidth="true"
          >
            Save
          </Button>
       </List>
    </div>
  )
}