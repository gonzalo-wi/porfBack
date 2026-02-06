#!/usr/bin/env python3
import re

# Read the file
with open('src/components/SystemBackground.vue', 'r') as f:
    content = f.read()

# Replace escaped backticks with proper syntax
# Pattern 1: :key with template literals
content = re.sub(r':key="\\`([^`]+)\\`"', r":key=\"'\1'\"", content)
content = re.sub(r':key="`([^`]+)`"', lambda m: f":key=\"'{m.group(1).replace('${', ' + ').replace('}', ' + ')}'\"", content)

# Pattern 2: :style with template literals in single line
content = re.sub(
    r':style="\{ animationDelay: \\`\\$\{([^}]+)\}s\\`, animationDuration: \\`\\$\{([^}]+)\}s\\` \}"',
    r':style="{ animationDelay: \1 + \'s\', animationDuration: \2 + \'s\' }"',
    content
)

content = re.sub(
    r':style="\{ animationDelay: `\$\{([^}]+)\}s`, animationDuration: `\$\{([^}]+)\}s` \}"',
    r':style="{ animationDelay: \1 + \'s\', animationDuration: \2 + \'s\' }"',
    content
)

# Pattern 3: :style with template literals in multi-line (for node positions)
content = re.sub(r'left: \\`\\$\{([^}]+)\}%\\`,', r'left: \1 + \'%\',', content)
content = re.sub(r'top: \\`\\$\{([^}]+)\}%\\`,', r'top: \1 + \'%\',', content)
content = re.sub(r'animationDelay: \\`\\$\{([^}]+)\}s\\`,', r'animationDelay: \1 + \'s\',', content)
content = re.sub(r'animationDuration: \\`\\$\{([^}]+)\}s\\`', r'animationDuration: \1 + \'s\'', content)

content = re.sub(r'left: `\$\{([^}]+)\}%`,', r'left: \1 + \'%\',', content)
content = re.sub(r'top: `\$\{([^}]+)\}%`,', r'top: \1 + \'%\',', content)
content = re.sub(r'animationDelay: `\$\{([^}]+)\}s`,', r'animationDelay: \1 + \'s\',', content)
content = re.sub(r'animationDuration: `\$\{([^}]+)\}s`', r'animationDuration: \1 + \'s\'', content)

# Write the fixed content
with open('src/components/SystemBackground.vue', 'w') as f:
    f.write(content)

print("Fixed all template literals in SystemBackground.vue")
