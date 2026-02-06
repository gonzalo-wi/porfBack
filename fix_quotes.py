#!/usr/bin/env python3
import glob

# Process all TypeScript files
for filepath in glob.glob('src/**/*.ts', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace curly apostrophes and quotes with straight ones
        content = content.replace('\u2018', "'")  # Left single quote
        content = content.replace('\u2019', "'")  # Right single quote (apostrophe)
        content = content.replace('\u201c', '"')  # Left double quote
        content = content.replace('\u201d', '"')  # Right double quote
        content = content.replace('\u2013', '-')  # En dash
        content = content.replace('\u2014', '-')  # Em dash
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'Fixed {filepath}')
    except Exception as e:
        print(f'Error processing {filepath}: {e}')
