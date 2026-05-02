import ProjectLayout from './ProjectLayout';
import { useLanguage } from '../context/LanguageContext';
import type { LocalizedText, ProjectContent, ProjectSection } from '../data/projectContent';

const getLocalizedText = (text: LocalizedText, language: string): string => {
  return language === 'zh' ? text.zh : text.en;
};

const SectionHeading = ({ title }: { title: string }) => {
  return <h2 className="text-3xl font-bold text-gray-900">{title}</h2>;
};

const renderSection = (section: ProjectSection, language: string, index: number) => {
  switch (section.type) {
    case 'text':
      return (
        <section key={index} className="space-y-6">
          <SectionHeading title={getLocalizedText(section.title, language)} />
          <p className="text-lg text-gray-700 leading-relaxed">
            {getLocalizedText(section.content, language)}
          </p>
        </section>
      );
    case 'feature-grid':
      return (
        <section key={index} className="space-y-6">
          <SectionHeading title={getLocalizedText(section.title, language)} />
          <div className={`grid gap-8 ${section.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {getLocalizedText(item.title, language)}
                </h3>
                <p className="text-gray-700">{getLocalizedText(item.description, language)}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case 'metric-cards':
      return (
        <section key={index} className="space-y-6">
          <SectionHeading title={getLocalizedText(section.title, language)} />
          <div className={`grid gap-8 ${section.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
                <div className="text-gray-700">{getLocalizedText(item.label, language)}</div>
                <p className="mt-2 text-sm text-gray-600">{getLocalizedText(item.description, language)}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case 'list-panels':
      return (
        <section key={index} className="grid md:grid-cols-2 gap-8">
          {section.panels.map((panel, panelIndex) => (
            <div key={panelIndex} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {getLocalizedText(panel.title, language)}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {panel.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {getLocalizedText(item, language)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      );
    case 'stat-cards':
      return (
        <section key={index} className="space-y-6">
          <SectionHeading title={getLocalizedText(section.title, language)} />
          <div className={`grid gap-6 ${section.items.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{item.value}</div>
                <div className="text-sm text-gray-700">{getLocalizedText(item.label, language)}</div>
                <div className="text-xs text-gray-500 mt-1">{getLocalizedText(item.description, language)}</div>
              </div>
            ))}
          </div>
        </section>
      );
    default: {
      const exhaustiveCheck: never = section;
      throw new Error(`Unhandled section type: ${JSON.stringify(exhaustiveCheck)}`);
    }
  }
};

const ProjectPage = ({ content }: { content: ProjectContent }) => {
  const { language } = useLanguage();

  return (
    <ProjectLayout
      title={content.title}
      description={content.description}
      projectNumber={content.projectNumber}
    >
      <div className="space-y-12">
        {content.sections.map((section, index) => renderSection(section, language, index))}
      </div>
    </ProjectLayout>
  );
};

export default ProjectPage;
