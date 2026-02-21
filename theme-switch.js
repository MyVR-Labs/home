const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-zinc-950': 'bg-white',
  'bg-zinc-900': 'bg-zinc-50',
  'bg-zinc-800': 'bg-zinc-100',
  'bg-zinc-100': 'bg-zinc-900',
  'bg-zinc-900/50': 'bg-zinc-50/50',
  'bg-zinc-900/80': 'bg-zinc-50/80',
  'text-zinc-50': 'text-zinc-900',
  'text-zinc-100': 'text-zinc-800',
  'text-zinc-300': 'text-zinc-600',
  'text-zinc-400': 'text-zinc-500',
  'text-zinc-500': 'text-zinc-400',
  'border-zinc-800': 'border-zinc-200',
  'border-zinc-700': 'border-zinc-300',
  'border-zinc-600': 'border-zinc-400',
  'from-zinc-100': 'from-zinc-900',
  'to-zinc-500': 'to-zinc-400',
  'hover:text-zinc-100': 'hover:text-zinc-900',
  'text-white': 'text-zinc-900',
  'hover:bg-zinc-800': 'hover:bg-zinc-200',
  'hover:bg-zinc-700': 'hover:bg-zinc-300',
  'hover:border-zinc-700': 'hover:border-zinc-300',
  'hover:border-zinc-600': 'hover:border-zinc-400',
  'hover:bg-white': 'hover:bg-zinc-100',
  'text-zinc-950': 'text-white'
};

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
   let content = fs.readFileSync(file, 'utf8');
   const keys = Object.keys(replacements).sort((a,b) => b.length - a.length);
   
   keys.forEach(k => {
      const regexSafe = k.replace(/[\/]/g, '\\$&');
      const regex = new RegExp(`(?<=[\\s"'\`:]|^)${regexSafe}(?=[\\s"'\`:]|$)`, 'g');
      content = content.replace(regex, replacements[k]);
   });
   
   fs.writeFileSync(file, content);
});

console.log("Done");
