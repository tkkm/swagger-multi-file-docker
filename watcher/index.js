const { Gaze } = require('gaze');
const path = require('path');
const merger = require('swagger-merger');

function resolve_path (dir) {
  return path.join(__dirname, '..', dir);
}

function multi_file() {
  const file_path = resolve_path('./src/index.yaml');
  const dest_file_path = resolve_path('./dist/swagger.yaml');
  const option = {
    input: file_path,
    output: dest_file_path,
  };
  merger(option).catch(err => {
    console.error(err);
    console.error('-------');
  });
}
function watch() {
  const gaze = new Gaze(resolve_path('./src/**/*.yaml'));
  const restart = () => {
    console.log('restarting...');
    gaze.close();
    watch();
  };
  gaze.on('error', (err) => {throw err;});
  gaze.on('added', (watcher) => restart());
  gaze.on('removed', (watcher) => restart());

  gaze.on('all', (event, file) => {
    console.log(`${event}: ${file}`);
    multi_file();
  });

  console.log('watching file changes...')
}
multi_file();
watch();