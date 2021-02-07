#!/usr/bin/env node
 
const program = require('commander');
 
program
  .version('0.1.0')
  .option('legalwork', 'Initialisation project')
  .option('--name [name]', 'Name of the project')
  .option('--description [description]', 'Description of the project ')
  .option('--gitRepo [gitRepo]', 'gitRepo of the project ')
  .option('--author [author]', 'author of the project ')

program.on('--help', function(){
  console.log('')
  console.log('Examples:');
  console.log('  $ legalwork --help');
  console.log('  $ legalwork -h');
});
 
program.parse(process.argv);
 
console.log('stuff');