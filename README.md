# The Urban Displacement Project
The Urban Displacement Project is a research and action initiative of UC Berkeley in collaboration with researchers at UCLA, community based organizations, regional planning agencies and the State of California’s Air Resources Board. The project aims to understand the nature of gentrification and displacement in the Bay Area. It focuses on creating tools to help communities identify the pressures surrounding them and take more effective action.

# Technical Scope

## 1. Data creation
Data values for dozens of urban phenomena were aggregated and summarized to the census tract level, many spanning three different time periods: 1990, 2000, 2013. Census Tract data, in shapefile format, was uploaded to CartoDB.

## 2. Web mapping solution: CartoDB
###CartoDB Administration 
- With the data loaded on to CartoDB, a "map" was generated for each parameter. The decision to choose "maps" over "layers" was made to avoid costs associated to using more than a handful of layers per map.
- For each parameter, careful considerations were made in terms of what classification to use (predominantly we used quantiles), color schemes, custom legends, hover over actions. Additionally, for temporal data, decisions were made as to which baseline breakdown to use, and for many of the parameters, the choice to use 2013 data as the base was made.

###CartoDB javascript API
- With individual maps created for each parameter, a custom web interface was created using the CartoDB Javascript API.
