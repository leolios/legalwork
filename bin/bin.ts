#!/usr/bin/env node

import execa, {Options as ExecaOptions} from 'execa';
import {statement} from "./bin-statement";

const { runner } = require('hygen');
const Logger = require('hygen/lib/logger');
const path = require('path');
const defaultTemplates = path.join(__dirname, '../_templates');

console.log("hello word");

// Récupération des argument du promp
const argument = process.argv.slice(2);
// traitement des arguments par statement et ensuite exécute le runner de hygen
run(statement(argument));

/**
 * Fonction pour utiliser le runner
 * @argument tableau de string
 */
export async function run(argument: string[]) {
  return runner(argument, {

    templates: defaultTemplates,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => require('enquirer'),
    exec: (action: any, body: string) => {
      const opts: ExecaOptions = {
        shell: true,
        input: body && body.length > 0 ? body : ''
      };
      return execa(action, opts)
    },
    debug: !!process.env.DEBUG
  })
}