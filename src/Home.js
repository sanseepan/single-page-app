import React from "react";
import bookApi from "./api";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 280,
    margin: 20
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="book-list">
      {bookApi.getAllBooks().map((book, id) => {
        return (
          <div key={book.id} className="single-card">
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  {book.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Genre
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={`/book/${book.number}`}>View book</Link>
                </Button>
              </CardActions>
            </Card>
            {/*<li key={book.id}>
                <Link to={`/book/${book.number}`}>{book.name}</Link>
              </li>
         */}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
