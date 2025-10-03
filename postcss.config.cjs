// postcss.config.cjs

// ❌ Delete these lines if they exist:
// import tailwindcss from '@tailwindcss/postcss';
// import autoprefixer from 'autoprefixer';

// ✅ CRITICAL FIX: Use require() for CommonJS (.cjs) files
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the package name as a key
    autoprefixer: {},
  },
};