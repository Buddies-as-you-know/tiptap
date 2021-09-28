import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { alpha, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React, { FC, useContext } from 'react'


import Themes from '../../utils/theme'
import { ThemeListContext } from '../pages/themes'

const useStyles = makeStyles((theme) => ({
   root: {
      fontFamily: Themes.font.fontFamily,
      flexGrow: 1,
   },
   title: {
      fontFamily: Themes.font.fontFamily,
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
   imgStyle: {
      width: '20px',
   },
}))

const SearchAppBar: FC = () => {
   const classes = useStyles()
   const { handleGetThemes } = useContext(ThemeListContext)

   const handleSearch = (event: any) => {
      handleGetThemes(event.target.value)
   }

   return (
      <div className={classes.root}>
         <AppBar position="fixed">
            <Toolbar>
               <Typography className={classes.title} variant="h6" noWrap>
                  TipTap
               </Typography>
               <div className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase
                     placeholder="テーマを検索"
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                     }}
                     inputProps={{ 'aria-label': 'search' }}
                     onChange={handleSearch}
                  />
               </div>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default SearchAppBar
