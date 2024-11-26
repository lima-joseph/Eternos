import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/EquipeEterna.css";

const teamMembers = [
  { name: "Niko", role: "Liderança jovem", description: "Na liderança jovem do grupo, guia com coragem e sabedoria, sempre servindo com o coração aberto.", image: "https://placehold.co/150x150" },
  { name: "Ana Clara", role: "Coordenadora", description: "Coordenadora que acolhe, organiza e fortalece o espírito fraterno que nos une.", image: "https://placehold.co/150x150" },
  { name: "Lorena Prado", role: "Serviço financeiro", description: "Responsável pelo serviço financeiro, zelando com amor pelo uso generoso dos recursos.", image: "https://placehold.co/150x150" },
  { name: "Emilly", role: "Marketing", description: "Nossa voz no marketing, conectando corações e espalhando nossa mensagem com entusiasmo e beleza.", image: "https://placehold.co/150x150" },
  { name: "Enzo & Maryane", role: "Artistas do coração", description: "Artistas do coração, transformando eventos e cultura em momentos inesquecíveis.", image: "https://placehold.co/150x150" },
  { name: "Maria Clara", role: "Secretária", description: "Secretária do grupo, registrando com carinho cada passo da nossa história.", image: "https://placehold.co/150x150" },
  { name: "Rafael Niro", role: "Conselheiro", description: "Conselheiro experiente, inspirando com sabedoria e serenidade.", image: "https://placehold.co/150x150" },
  { name: "Cícera", role: "Conselheira de eventos", description: "Mãe de coração e conselheira de eventos, sempre trazendo acolhimento e alegria.", image: "https://placehold.co/150x150" },
  { name: "Frei Reinaldo", role: "Pastor", description: "(Nosso querido Malvadão) O pastor que guia com zelo e amor, seguindo o exemplo de Francisco.", image: "https://placehold.co/150x150" },
  { name: "Irmã Lurdes", role: "Diretora espiritual", description: "Diretora espiritual que com sua ternura nos aproxima mais de Deus.", image: "https://placehold.co/150x150" },
  { name: "Nyna", role: "Conselheira animadora", description: "Conselheira animadora, sempre trazendo a 'Só Alegria' para o grupo.", image: "https://placehold.co/150x150" },
  { name: "Rodrigo", role: "Conselheiro tutelar", description: "Conselheiro tutelar, garantindo o bem-estar da juventude com dedicação.", image: "https://placehold.co/150x150" },
  { name: "Anthony", role: "Técnico de som", description: "Técnico de som, dando voz às nossas canções e orações com amor.", image: "https://placehold.co/150x150" },
  { name: "Joseph", role: "Designer do site", description: "Designer do site, espalhando o carisma do grupo no digital com criatividade.", image: "https://placehold.co/150x150" },
];

const TeamPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Paz e Bem, família eTerna! 🌟</h1>
      <p className="text-center">
        Com o coração cheio de gratidão e alegria, apresentamos a nova configuração da nossa amada coordenação! 
        Unidos pelo exemplo de São Francisco, vamos levar luz, esperança e alegria para todos os cantos! 🌿✨
      </p>
      <div className="row gy-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-3">
            <div className="card h-100 text-center custom-card">
              <div className="image-container">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">🌟 {member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
