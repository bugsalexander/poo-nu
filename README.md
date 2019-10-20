# poo-nu
Ever need to hit the loo, and don't know what to do? Well not anymore! With POO-NU, you'll never be more ... than a click away.

## Inspiration
We originally got the idea from one of our friends who rates bathrooms he find around campus. But then we thought, how can we make it better? And so, we decided that we would build an app to both streamline bathroom-finding from any location on campus, and also provide a rating system, as not all bathrooms are built equally.

## What it does
Upon opening the app, the user is instantly presented with a big green button, labeled "I gotta go." This button is for those moments when the only thing that matters is finding the nearest restroom, and does so, routing straight to the nearest loo on campus. After a hopefully successful experience, the user is then prompted to rate the bathroom, adding to the collection of ratings in our database. This view also provides the viewer with a set of alternative bathrooms nearby to ensure that they have the opportunity to choose the one that strikes their fancy.

An alternate "explore" mode allows the user to scroll around the map, inspecting all the buildings on campus, each with their own set of buildings. The user can view a bathroom's average rating, as well as all its ratings, each with their own score and description. This allows our users to contribute to the health and well-being of others using the bathroom as well as the quality of our bathrooms at large.

## How we built it
Initially, we did lots of planning. We thought about who would be using our app, what they wanted, and drew out some wireframes and design mocks for the UI of the app. We also thought about what operations we would need for our backend API. 

Step two was splitting up the work, and figuring out what frameworks and APIs we were going to use in our project. We divided with Alex and Dillon on the backend, and Stanley and Jake on the frontend. Alex had recently heard about the greatness of GraphQL through a friend and wanted to try it out for the API, so we went with that for the backend, in parallel with Apollo server. Dillon had just taken a class on SQL, and decided to take it for a spin with the database. Stanley decided he wanted to try his hand at React-Native, and so he and Jake decided to use that for the frontend.

## Challenges we ran into
Dillon and Alex had a lot of bug fixes relating to discrepancies between the GraphQL schema and the MySQL database work, while Jake and Stanley spent a significant amount of time trying to figure out how to route the application's front-end to different pages and develop a good flow for the assignment. When fusing our React-Native frontend and Node / GraphQL backend, we encountered a variety of issues regarding the format of the GraphQL data as well as with asynchronous functions and promises that proved to be more nuanced and complex than initially thought. 

## Accomplishments that we're proud of
We're glad that we were able to put together a complete, professional-looking application - accomplishing almost all of our goals for this project! We each learned to play to the strengths of our other team members, readily asking for help and collaborating when problems arose to make sense of code, debugging and bugfixing while teaching one another about our areas of strength. Dillon was the authority on databases, while Alex was the master of GraphQL, Jake came in with a lot of React experience, and Stanley came in with lots of iOS and JavaScript experience as well as excellent design sensibilities; we were all able to consult one another when we ran into issues and were able to learn things from others.

## What we learned
With each of us having different levels of experience with each of the technologies we used, all of us learned a lot about developing applications for Android and iOS as well as with the nontraditional GraphQL query language for handling requests through Node.js. We also learned of much of the nuance regarding promises and other relatively confusing JavaScript features, making use of them to construct our application.

## What's next for Poo-NU
Ideally, we will make Poo-NU into a published application and submit it to app stores! We'd like to add opportunities for more schools - not just Northeastern - to submit their bathrooms to our database, providing, among other schools, Harvard with its very own Crimson Crapper! We'd also like to automate some parts of our code like indexing buildings that could potentially have restrooms beforehand, allowing users to select real buildings at other universities to mark. Ideally, we could also expand beyond universities to workplaces and/or similar spaces to ensure those not in college are able to rate, review and evaluate their ideal workplace restrooms as well.

 We considered providing the opportunity to add images, but felt that this could be too much of a privacy concern for others in the restroom; however, the visual appeal of the bathroom is certainly a factor, and alternative approaches such as similar stock photos should be pursued in the future. We could also evaluate reviews of these restrooms to pick buzzwords and characteristics associated with certain types of restrooms, recommending restrooms to users based on the frequency and recency of their reviews as well as their tendency towards a certain type of restroom (after all, cleanliness isn't the only priority when considering such accommodations). 

Tl, dr; we'd love to continue to pursue building this application to ensure that everyone has a pleasant experience. 

Built at HackHarvard 2019.
