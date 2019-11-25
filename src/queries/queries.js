import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable(showQueryData) {
  const finalData = showQueryData.dataFromLandingPage;
//   const finalData = [{
// 		id: 1,
// 		name: "Leanne Graham",
// 		username: "Bret",
// 		email: "Sincere@april.biz",
// 		phone: "1-770-736-8031 x56442",
// 		website: "hildegard.org"		
// 	},
// 	{
// 		id: 2,
// 		name: "Ervin Howell",
// 		username: "Antonette",
// 		email: "Shanna@melissa.tv",
// 		phone: "010-692-6593 x09125",
// 		website: "anastasia.net"
// 	},
// 	{
// 		id: 3,
// 		name: "Clementine Bauch",
// 		username: "Samantha",
// 		email: "Nathan@yesenia.net",
// 		phone: "1-463-123-4447",
// 		website: "ramiro.info"
// 	},
// 	{
// 		id: 4,
// 		name: "Patricia Lebsack",
// 		username: "Karianne",
// 		email: "Julianne.OConner@kory.org",
// 		phone: "493-170-9623 x156",
// 		website: "kale.biz"
// 	},
// 	{
// 		id: 5,
// 		name: "Chelsey Dietrich",
// 		username: "Kamren",
// 		email: "Lucio_Hettinger@annie.ca",
// 		phone: "(254)954-1289",
// 		website: "demarco.info"
// 	},
// 	{
// 		id: 6,
// 		name: "Mrs. Dennis Schulist",
// 		username: "Leopoldo_Corkery",
// 		email: "Karley_Dach@jasper.info",
// 		phone: "1-477-935-8478 x6430",
// 		website: "ola.org"
// 	},
// 	{
// 		id: 7,
// 		name: "Kurtis Weissnat",
// 		username: "Elwyn.Skiles",
// 		email: "Telly.Hoeger@billy.biz",
// 		phone: "210.067.6132",
//     website: "elvis.io"
//   },
// 	{
// 		id: 8,
// 		name: "Nicholas Runolfsdottir V",
// 		username: "Maxime_Nienow",
// 		email: "Sherwood@rosamond.me",
// 		phone: "586.493.6943 x140",
// 		website: "jacynthe.com"
// 	},
// 	{
// 		id: 9,
// 		name: "Glenna Reichert",
// 		username: "Delphine",
// 		email: "Chaim_McDermott@dana.io",		
// 		phone: "(775)976-6794 x41206",
// 		website: "conrad.com"
// 	},
// 	{
// 		id: 10,
// 		name: "Clementina DuBuque",
// 		username: "Moriah.Stanton",
// 		email: "Rey.Padberg@karina.biz",
// 		phone: "024-648-3804",
// 		website: "ambrose.net"
// 	}
// ];
  const columnNames = [];  
  let propertyNames =[];
  finalData && finalData.forEach( function (obj, index){
    propertyNames= Object.keys(obj);
  });
  for (var i = 0; i < propertyNames.length; i++ ) {
    const tempColumnHeading ={
      "id":propertyNames[i],
      "label":propertyNames[i]
    };
    columnNames.push(tempColumnHeading);
  }
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columnNames.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}{}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { finalData && finalData.length > 0 && finalData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columnNames.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={finalData && finalData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
