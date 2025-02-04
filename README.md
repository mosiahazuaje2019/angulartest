> [!IMPORTANT]  
> Before starting, create a public GitHub/GitLab repository and share the link with the interviewer.

> [!TIP]  
> If you'd like to use this project as a template instead of setting up yours from scratch:
> - Create a public GitHub/GitLab repository
>   - Copy the clone URL (example: git@github.com:CoinBR/tmp.git) 
> - Clone this repository (the challenge)
>   - Navigate to its folder in the terminal
>   - Run this command to load the submodules:
>     - `git submodule update --init --recursive --remote`
>   - Run this command with your repository URL: 
>     - `submodules/clone_and_claim/run.sh ___YOUR_REPOSITORY_URL___`

## Code Challenge - Angular 

 
### Task Description  

Create a Angular app to displays a list of users fetched from a public REST API.
The app should be responsive and include the following features:  
  
 - [ ] Fetch user data from the JSONPlaceholder API.  
	 -  [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
 - [ ] Display the user names and email addresses in a responsive card layout.  
 - [ ] Implement a search functionality that allows users to filter the displayed users by name.  
 - [ ] Ensure that the application follows best practices for Angular development, including use of: 
	 - [ ] components
	 - [ ] services
	 - [ ] reactive programming.  
    
### Requirements  

 - [ ] Use Angular 11 or higher.  
 - [ ] Implement responsive design using CSS or a CSS framework (e.g., Bootstrap).  
 - [ ] Use RxJS for handling asynchronous data fetching.  
 - [ ] Write clean, maintainable code adhering to SOLID principles.  

 ---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output

