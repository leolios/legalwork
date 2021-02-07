import 'mocha';
import 'chai';
import {promises as fs} from 'fs';
import expect from 'expect';
import {statement} from "../bin/bin-statement";
import {run} from "../bin/bin";

import * as assert from "assert";


describe('Generating', function() {

  describe('bin-statement.ts and bin.ts', function() {
    it('Should be return not exist argument', function() {
      const argument: string[] = statement(["fake"]);
      const result: string = 'Désolé, l\'argument : fake n\'existe pas, si besoin : legalwork help'
      expect(argument[0]).toEqual(result);
    });

    it('should generate app without prompt', function() {
      const argument = statement(['init']);
      expect(argument).toStrictEqual(['init', 'new']);
    });

    it('should generate app without prompt with params', function() {
      const argument = statement(['init', '--domain', 'mon_domaine', '--proprietaire', 'monNom', '--status', 'SARL', '--adresse', '38_impasse', 'blabla_33000_BORDEAUX', '--nomCreateur', 'moi', '--partiesPrenante', 'toi_moi_vous', '--urlCreateur', 'siteCreateur', '--responsablePublication', 'nom', '--emailResponsablePublication', 'email', '--nomWebmaster', 'nom', '--emailTelephoneWebmaster', 'email/tel', '--hebergeurSiteWeb', 'site', '--adresseHebergeurSiteWeb', 'adresse']);
      expect(argument).toStrictEqual(['init', 'new','--domain', 'mon_domaine', '--proprietaire', 'monNom', '--status', 'SARL', '--adresse', '38_impasse', 'blabla_33000_BORDEAUX', '--nomCreateur', 'moi', '--partiesPrenante', 'toi_moi_vous', '--urlCreateur', 'siteCreateur', '--responsablePublication', 'nom', '--emailResponsablePublication', 'email', '--nomWebmaster', 'nom', '--emailTelephoneWebmaster', 'email/tel', '--hebergeurSiteWeb', 'site', '--adresseHebergeurSiteWeb', 'adresse']);
    });
  });

  xdescribe('Generating good files from bin.ts', function() {
    it('file exist and contain my values generating by legalwork', async function() {
      const argument = statement(['init', '--domain', 'mon_domaine', '--proprietaire', 'monNom', '--status', 'SARL', '--adresse', '38_impasse', 'blabla_33000_BORDEAUX', '--nomCreateur', 'moi', '--partiesPrenante', 'toi_moi_vous', '--urlCreateur', 'siteCreateur', '--responsablePublication', 'nom', '--emailResponsablePublication', 'email', '--nomWebmaster', 'nom', '--emailTelephoneWebmaster', 'email/tel', '--hebergeurSiteWeb', 'site', '--adresseHebergeurSiteWeb', 'adresse']);
      const pathRoot = "src/mentions-legales.html";

      await run(argument).then(async data => {
        await fs.readFile(pathRoot, "utf-8").then( data => {
          expect(data.includes('38_impasse_blabla_33000_BORDEAU')).toBe(true);
        }).catch(err => {
          console.log(err);
          expect(err).toBeFalsy();
        });
      })
    });
  });
});