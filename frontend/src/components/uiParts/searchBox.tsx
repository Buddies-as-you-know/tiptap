import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { alpha, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const useStyles = makeStyles((theme) => ({
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
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
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(3),
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
   sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
         display: 'flex',
      },
   },
   sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   },
}))

const SearchBox = () => {
   const classes = useStyles()
   const [anchorEl, setAnchorEl] = React.useState(null)
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

   const isMenuOpen = Boolean(anchorEl)
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null)
   }

   const menuId = 'primary-search-account-menu'

   return (
      <div className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder="Search…"
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
         />
      </div>
   )
}
export default SearchBox
