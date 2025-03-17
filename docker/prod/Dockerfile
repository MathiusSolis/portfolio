# --------------------------------------------------------------------
# Building
# --------------------------------------------------------------------

FROM node:lts-alpine AS building

WORKDIR /frontend

# Copy package.json to SO container
# It is copied in "/frontend"
COPY package*.json ./

# Install Next.js (from package.json)
# It's executed in "/frontend"
RUN npm install

# Copy rest content
COPY ./src ./src

# Next.js config
COPY ./next.config.ts ./

# TypeScritp config
COPY ./tsconfig.json ./

# TailwindCSS config
COPY ./tailwind.config.ts ./

COPY ./postcss.config.mjs ./

# Antes de npm run build
RUN echo "NEXT_PUBLIC_MAIL_SERVER_URL: $NEXT_PUBLIC_MAIL_SERVER_URL"

RUN npm run build -omit=dev

# --------------------------------------------------------------------
# Production
# --------------------------------------------------------------------

FROM node:lts-alpine AS production

WORKDIR /frontend

COPY --from=build /frontend/package.json ./package.json

COPY --from=build /frontend/.next ./.next

# For now, nothing! 
# COPY --from=build /frontend/public ./public

COPY --from=build /frontend/node_modules ./node_modules


CMD ["npm", "run", "start"]