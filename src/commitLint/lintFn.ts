/* eslint-disable import/no-extraneous-dependencies */
// Invoked on the commit-msg git hook by husky.
// https://github.com/typicode/husky/issues/589
// https://github.com/typicode/husky/issues/113

function lintFn() {
  const chalk = require('chalk');
  const { readFileSync, existsSync } = require('fs');
  const path = require('path');
  
  const cwd = process.cwd();

  const msgRelativePath = process.env.HUSKY_GIT_PARAMS;
  const msgPath = path.resolve(cwd, msgRelativePath)
  const gitCommitFileExist = existsSync(msgPath);

  if (!gitCommitFileExist) {
    chalk.red(`please make sure you are in current word directory root and try commit with message again`);
    process.exit(1);
  }
  
  const msg = readFileSync(msgPath, 'utf-8').trim();


  const commitRE = /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|hotfix|bump|docs|UI|style|refactor|⚡perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep)(\(.+\))?: .{1,50}/;

  if (!commitRE.test(msg)) {
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `invalid commit message format. - @tsword/lint`,
      )}\n\n${chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )}
  ${chalk.green(`💥 feat(compiler): add 'comments' option`)}\n
  ${chalk.green(`🤯 refactor(compiler): add 'comments' option`)}\n
  ${chalk.green(`🐛 fix|hotfix(compiler): fix some bug`)}\n
  ${chalk.green(`📝 docs(compiler): add some docs`)}\n
  ${chalk.green(`💄 UI|style(compiler): better styles`)}\n
  ${chalk.green(`🎨 chore(compiler): do something`)}\n
  ${chalk.green(` bump(compiler): version update`)}\n
  ${chalk.red(`See FE docs or [https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format] for more details.\n`)}`,
    );
    process.exit(1);
  } else {
    console.log(`  ${chalk.green('✅ PASS: Commit Message lint - @tsword/lint')}\n`);
  }
}

module.exports = lintFn;
