import PropTypes from "prop-types";
import { Typography, List, ListItem, Divider } from "@material-ui/core";

const SearchHistory = ({ queries }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        style={{ marginTop: "20px" }}
      >
        Recent Searches
      </Typography>
      <List>
        {queries.map((query, index) => (
          <div key={index}>
            <ListItem>
              {query.search} - {formatDate(query.searchTime)}
            </ListItem>
            {index !== queries.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

SearchHistory.propTypes = {
  queries: PropTypes.arrayOf(
    PropTypes.shape({
      query: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchHistory;
