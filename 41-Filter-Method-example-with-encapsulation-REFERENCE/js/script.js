// Filter method Example
// more encapsulated code and easy to debug
import {renderTeams} from "../ui/renderTeams.js"; //notice the curly braces
import {searchTeams} from "../ui/searchTeams.js"; //notice the curly braces
import teams from "./data/teams.js";

let teamsToRender = teams;

renderTeams(teamsToRender);
searchTeams(teamsToRender)



