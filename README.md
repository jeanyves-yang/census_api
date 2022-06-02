# census_api
API handling a database for US census and requests to group by categories (e.g: for the value "class of workers", categories would be "private", "local government", etc.) and sort them by the number of people per category. It also computes the average age for each category.

# Requirements
node >= v14
git-lfs

## Project setup
```
git lfs pull
npm install
```

### Compiles and runs for development
```
npm run start
```